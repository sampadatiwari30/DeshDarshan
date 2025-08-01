#!/bin/bash
echo "Force resolving GitHub conflicts..."

# Remove all conflict markers and push clean version
git reset --hard HEAD
git merge origin/main -X ours --no-edit || true
git add .
git commit -m "Resolve all GitHub merge conflicts - maintain navbar system" || true
git push origin doc-fixes --force-with-lease

echo "Conflicts resolved!"
