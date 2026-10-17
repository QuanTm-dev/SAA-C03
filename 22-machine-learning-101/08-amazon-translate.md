# Amazon Translate

- Amazon Translate is a text translation service that uses machine learning.
- The translation process has 2 main steps:
  1. Encoder read the source text and output the meaning of the text (AKA semantic representation).
  2. Decoder takes the semantic representation and generates the translated text in the target language.
- Amazon Translate uses attention mechanism to understand the context. It helps to decide which words in the source text are most relevant for generating the translated output.
- Can auto detect the source language, but you can also specify it.
- Use cases: Integrate with other AWS services and applications to translate content in their data processing workflow.
