# Amazon Kendra

- Amazon Kendra is an intelligent search service powered by machine learning (ML).
- Designed to mimic interacting with a human expert, Kendra allows users to ask questions in natural language and receive relevant answers from data sources.
- Support wide range of question types:
  - Factoid questions (e.g., "What is the capital of France?"): Questions that have a specific factual answer.
  - Descriptive questions (e.g., "How does photosynthesis work?"): Questions that require a detailed explanation or description.
  - Keyword-based questions (e.g., "What time is the keynote address" - **address** has multiple meaning, Kendra guesses the meaning of the word in this context to provide relevant answer): Questions that rely on specific keywords to retrieve relevant information.

## Key concepts

- Index: Searchable data organized in a way that allows Kendra to quickly retrieve relevant information.
- Data source: The origin of the data that Kendra indexes and searches, such as databases, file systems, or web pages.
- Kendra indexes data source based on a schedule or on-demand.
- Data sources can be structured (e.g., relational databases) or unstructured (e.g., documents, web pages).
