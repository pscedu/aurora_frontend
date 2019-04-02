# Components
* Document Database
    * Stores documents on filesystem on behalf of the server.
    * MongoDB instance that maps filesystem paths to a UUID and a set of metadata tags.
    * Provides CLI for Server to interact with.
        * Server can request: Create/Read/Update/Delete of documents; Search document by metadata tags.
* Server
    * Node.js application that processes requests from Clients and triggers the appropriate interacts with the Document Database.
    * Provides a RESTful interface for Clients to interact with.
    * Interacts with a local instance of the Document Database via CLI.
* Client
    * JavaScript UI that interacts with the Server via a RESTful API.
    * Should support features described by User Stories in Requirements document.

# Workflows
TODO: Detail out how components interact based on User Stories.
