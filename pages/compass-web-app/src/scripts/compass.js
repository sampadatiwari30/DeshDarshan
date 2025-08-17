// Enhanced compass functionality with accurate bearing calculation and region-based interactions

class CompassController {
  constructor() {
    this.isTracking = false;
    this.watchId = null;
    this.lastBearing = 0;
  }

  // Initialize compass functionality
  init() {
    if (!navigator.geolocation) {
      console.warn('Geolocation is not supported by this browser.');
      return;
    }

    this.startTracking();
  }

  // Start tracking user's location
  startTracking() {
    if (this.isTracking) return;

    this.isTracking = true;
    this.watchId = navigator.geolocation.watchPosition(
      this.handlePositionUpdate.bind(this),
      this.handleError.bind(this),
      {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 5000
      }
    );
  }

  // Stop tracking user's location
  stopTracking() {
    if (!this.isTracking) return;

    navigator.geolocation.clearWatch(this.watchId);
    this.isTracking = false;
    this.watchId = null;
  }

  // Handle position updates
  handlePositionUpdate(position) {
    const { latitude, longitude } = position.coords;
    const bearing = this.calculateBearing(latitude, longitude);
    this.updateCompassRotation(bearing);
  }

  // Handle geolocation errors
  handleError(error) {
    console.warn('Geolocation error:', error.message);
  }

  // Calculate bearing based on current position
  calculateBearing(latitude, longitude) {
    // Calculate bearing relative to true north
    // This is a simplified calculation - for demo purposes
    // In a real application, you would need to account for magnetic declination
    const targetLat = 28.6139;  // New Delhi's latitude (reference point)
    const targetLon = 77.2090;  // New Delhi's longitude (reference point)

    const φ1 = this.toRadians(latitude);
    const φ2 = this.toRadians(targetLat);
    const Δλ = this.toRadians(targetLon - longitude);

    const y = Math.sin(Δλ) * Math.cos(φ2);
    const x = Math.cos(φ1) * Math.sin(φ2) -
              Math.sin(φ1) * Math.cos(φ2) * Math.cos(Δλ);
    const θ = Math.atan2(y, x);

    return (this.toDegrees(θ) + 360) % 360;
  }

  // Update compass rotation
  updateCompassRotation(bearing) {
    const compass = document.querySelector('.compass-svg');
    if (!compass) return;

    // Smooth rotation animation
    const currentRotation = this.lastBearing;
    const rotation = this.shortestRotation(currentRotation, bearing);
    
    compass.style.transform = `rotate(${rotation}deg)`;
    this.lastBearing = rotation;
  }

  // Helper function to convert degrees to radians
  toRadians(degrees) {
    return degrees * (Math.PI / 180);
  }

  // Helper function to convert radians to degrees
  toDegrees(radians) {
    return radians * (180 / Math.PI);
  }

  // Calculate shortest rotation path
  shortestRotation(current, target) {
    const diff = target - current;
    if (Math.abs(diff) <= 180) return target;
    return target > current ? target - 360 : target + 360;
  }
}

// Initialize compass when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const compass = new CompassController();
  compass.init();
});

  // Placeholder function to determine direction from coordinates
  function getDirectionFromCoordinates(latitude, longitude) {
    // Implement your logic to determine direction based on coordinates
    // For now, return a random direction for demonstration
    const directions = ['N', 'E', 'S', 'W'];
    return directions[Math.floor(Math.random() * directions.length)];
  }

  // Event listeners for compass regions
  compassRegions.forEach(region => {
    region.addEventListener('mouseenter', function() {
      this.classList.add('active');
      const direction = this.getAttribute('data-direction');
      const event = new CustomEvent('compassRegionHover', { detail: { direction } });
      window.dispatchEvent(event);
    });

    region.addEventListener('mouseleave', function() {
      this.classList.remove('active');
    });

    region.addEventListener('click', function() {
      const direction = this.getAttribute('data-direction');
      const event = new CustomEvent('compassRegionClick', { detail: { direction } });
      window.dispatchEvent(event);
    });
  });

  // Geolocation API to get user's location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      updateCompassDirection(latitude, longitude);
    }, error => {
      console.error('Error getting location:', error);
    });
  } else {
    console.error('Geolocation is not supported by this browser.');
  }

  // Example: Integration hook for LiveTrack or other JS libraries
  window.addEventListener('compassRegionClick', function(e) {
    console.log('Compass region clicked:', e.detail.direction);
  });

  window.addEventListener('compassRegionHover', function(e) {
    console.log('Compass region hovered:', e.detail.direction);
  });
});