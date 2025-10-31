export const gitignoreContent = `
# ==========================================================
#  Node.js / Express Project Git Ignore
# ==========================================================

# Node modules
node_modules/
jspm_packages/
bower_components/

# Logs
logs/
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

# Environment files
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Coverage / test output
coverage/
.nyc_output/
test-results.xml
junit.xml

# Build outputs
dist/
build/
out/
tmp/
temp/
.cache/
.next/
.vercel/
.svelte-kit/
public/build/

# TypeScript
*.tsbuildinfo
tsconfig.tsbuildinfo

# Prisma
prisma/migrations/
*.db
*.sqlite
*.sqlite3

# PM2 process logs
.pids/
.pm2/

# OS files
.DS_Store
Thumbs.db
ehthumbs.db
Icon?
Desktop.ini

# IDEs and editors
.vscode/
.idea/
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
*.iml

# Package manager files
package-lock.json
yarn.lock
pnpm-lock.yaml

# Misc
*.tgz
*.zip
*.tar.gz
*.tmp
*.bak

# ESLint / Prettier caches
.eslintcache
.prettiercache

# Local project metadata
*.local
*.log.old
.history/
`;
