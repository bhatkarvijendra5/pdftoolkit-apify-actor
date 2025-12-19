
FROM apify/actor-node:16

# Copy package files first
COPY package*.json ./

# Install dependencies with clear logging
RUN npm install --verbose

# Copy all other files
COPY . ./

# Set the start command
CMD npm start
