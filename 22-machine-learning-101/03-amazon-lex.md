# Amazon Lex

- Amazon Lex is a service for building conversational interfaces into any application using voice and text.
- Powers the Amazon Alexa virtual assistant.
- Provide 2 main functionalities:
  - Automatic Speech Recognition (ASR) to convert speech to text.
  - Natural Language Understanding (NLU) to recognize the intent of the text and extract relevant information.
- Good for building chatbots, virtual assistants, and other conversational interfaces.

## Key Concepts

- Bot: Which interact with users through voice or text.
- Intent: Represents an action an user wants to perform. For example, "BookFlight" or "OrderPizza".
- Utterance: A phrase that a user says to express an intent. For example, "Can I order a pizza?" or "Give me a pizza please."
- Slot: Parameters that are required to fulfill an intent. For example, for the "OrderPizza" intent, slots could be "size", "toppings", and "crust type".
- How to fullfill an intent: Ofter done by using Lambda functions to process the intent and return a response.
