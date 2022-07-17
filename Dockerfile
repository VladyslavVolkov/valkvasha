# syntax=docker/dockerfile:latest

# Base images

ARG version=2.2.0
FROM dcr.bndigital.dev/library/yarn:${version} AS build
WORKDIR /usr/local/src
COPY .yarn .yarn
COPY package.json yarn.lock .yarnrc.yml ./
RUN yarn
COPY packages/ packages/
RUN yarn \
 && yarn build

# Runtime images
FROM dcr.bndigital.dev/library/nodejs:${version} AS website
COPY --from=build --chown=node /usr/local/src/packages/website/build .
ENTRYPOINT ["serve"]
CMD ["--single", "--no-etag=false", "."]

FROM dcr.bndigital.dev/library/nodejs:${version} AS cms
COPY --from=build --chown=node /usr/local/src/packages/cms .
ENTRYPOINT ["yarn"]
CMD ["strapi", "start"]