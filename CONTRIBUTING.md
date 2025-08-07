## 📌 How to Fork and Clone

To start contributing:

1. Click the **Fork** button at the top-right corner of the repository on GitHub.
2. After forking, clone the repository to your local machine:
   git clone https://github.com/<your-username>/DeshDarshan.git
   cd DeshDarshan
3.Set the original repo as upstream (optional but recommended):
   git remote add upstream https://github.com/sampadatiwari30/DeshDarshan.git

🌿 Branch Naming Convention
Create a new branch for each feature or fix. Use the format:
Terminal : issue-<issue-number>-short-description
Examples: issue-3-add-search-bar
          issue-10-contributing-md
          issue-4-testimonials-section
This keeps the branches clean and identifiable.

🚀 How to Open Pull Requests
1.After making your changes, stage and commit:
Terminal : git add .
           git commit -m "Add: Search bar to filter destinations (#3)"
2.Push to your fork: 
Terminal : git push origin issue-3-add-search-bar
3.Go to your fork on GitHub and click Compare & Pull Request.
4.Add a descriptive title and comment.
5.Link the issue in the PR using: 
Terminal : Fixes #<issue-number>
This will auto-close the issue when the PR is merged.

🎨 Code Formatting Rules
1.Use semantic HTML5 elements wherever possible.
2.Maintain consistent indentation (2 or 4 spaces).
3.Organize CSS styles logically, and avoid excessive inline styling.
4.For JavaScript, write clean and readable code with proper naming.
5.Test your code in responsive view before pushing changes.

🏷️ Good First Issue & Help Wanted Labels
If you're new to the project:
1.Look for issues labeled good first issue — these are beginner-friendly tasks.
2.Issues marked help wanted need additional assistance and are open to all.
3.You're encouraged to comment on an issue before starting, to avoid duplication of work.

