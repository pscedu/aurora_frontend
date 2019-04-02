# Project specifics
Document status: Draft
Manager: ropelews@psc.edu
Developer: blearn@psc.edu
Last Updated: 4/2/2019

# Terminology definitions
* Document Types
    * Science Data: Files that serve as input or output data in a Science Procedure.
    * Science Procedures: Files that describe Science Data, the workflows used to process Science Data, or any information required to repeat experiments and/or processes related to Science Data.
    * Project Management: Files, such as meeting minutes and agendas, that describe project goals or progress. 

# Goals
* Our goal is to create a web application that serves as a document management system for internal use by the AURORA project. Using cloud storage products has lead to disorganized files making it hard to locate, or have conversations about, shared documents.
* We want to enable better collaboration with AURORA project members. Team members will be able to upload, view, search for, and comment on documents. Each document is associated with metadata tags to enable organization and searchablity.
* We want to store various types of documents: Science Data, Science Procedures, & Project Management (see definitions).
* We want to ensure reproducibility of scientific workflows by documenting Science Procedures for all Science Data stored.
* We want to integrate Science Data documents with external tools for viewing or processing those documents. For example, a 'compute in place' feature that would initiate compute jobs on selected Science Data.

# Requirements
## Users stories
| Title | Description | Priority | Notes |
| ---   | ---         | ---      | ---   |
| File Upload | A user wants to upload a new document | Must Have | |
| File Comment | A user wants to add a comment about a document in the system | Must Have | |
| File Search | A user wants to search for a document in the system | Must Have | |
| View File | A user wants to view an existing document in a web browser | Should Have | Need to determine what filetypes we want/can support for web viewing. |
| Compute in Place | A user wants to select multiple Science Data documents from this system, then initiate a compute job on Bridges that uses the selected documents | Should Have | This needs more discussion. We may want to tie this feature to documented workflows. E.g. 'Select a workflow; select data files; begin compute'. |

# User interaction & design
TODO: design mockups for UI based on user stories. 

# Questions, clairifcations, & scope


