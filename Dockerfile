# ---- Base Node ----
FROM node:alpine AS base
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g pnpm

# ---- Prod Dependencies ----
FROM base AS prod_dependencies
# Install production dependencies without running scripts
RUN pnpm install --prod --ignore-scripts

# ---- Dev Dependencies ----
FROM base AS dev_dependencies
COPY --from=prod_dependencies /usr/src/app/node_modules ./node_modules
# Install dev dependencies on top of production dependencies
RUN pnpm install

# ---- Build ----
FROM dev_dependencies AS build
COPY . ./
# Build the application
RUN pnpm run build

# ---- Release ----
FROM node:alpine AS release
# Copy production dependencies
COPY --from=prod_dependencies /usr/src/app/node_modules ./node_modules
# Copy build files
COPY --from=build /usr/src/app/dist ./dist
# Set the command to run your app using `node` command
CMD ["node", "dist/index.js"]