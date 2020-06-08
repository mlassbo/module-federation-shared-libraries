# Module Federation for shared libraries
This purpose of this repo is to discuss the possibility of using Webpack 5 Module Federation for sharing libraries between Microfrontends.

The, very basic, example code consists of one host and two MFEs.

## Run the example
npm run start in mfe1, mfe2 and host respectively

## Host
The host can be seen to represent a brownfield(-ish) monolithic SPA that has begun to be refactored into seperate code bases using a Microfrontend architecture. The host references two Microfrontend (MFE) components MFE1 and MFE2.

## MFE1 and MFE2
These are the Microfrontends promising to put an end to the monolithic SPA era. In a more realistic example they would be built on some framework and perhaps registered as shadow dom custom elements. In the absence of frameworks and as an example of sharing libraries they both reference lodash.

# Goals
The MFEs should load real fast without significant overhead in load time or memory footprint compared to a classic monolithic SPA.

# (Possibly naive) Expected characteristics of the final solution
- The host app should only have to reference the entrypoint of each MFE
- An MFE entrypoint is minimal in size
- The MFE bundle is split into several chunks to minimize the size of the entrypoint and to make use of the browser cache.
-  The chunks are loaded lazily by the MFE entrypoint (so that the host should not have to reference the MFE chunks, only the entrypoint)
- If several MFEs use the same library, e.g. react/angular etc, the library should only be fetched once to minimize load time and memory consumption.

# Issues with the example code
- The host references two MFEs but somehow one of them is loaded twice and the other one not at all resulting in only one of them being displayed.
- The host has to reference both main.js and remoteEntry.js for each MFE
- The MFEs has to be initialized with an async import(realentrypoint) (this one is perhaps not a big issue..)