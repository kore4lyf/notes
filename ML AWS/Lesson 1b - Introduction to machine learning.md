# Lesson 1: Introduction to machine Machine Learning

Machine learning is changing the world

- it has lead to the development of autonomous vehicles
- It allows for a more accurate and rapid translation of text into hundreds of languages.
- It powers AI assistants like Alexa.

## What is Machine Learning

Machine learning (ML) is a modern software development technique and a type of artificial intelligence (AI) that enables computers to solve problems by using examples of real-world data. 

- It allows computers to automatically learn and improve from experience without being explicitly programmed to do so.

## Machine Learning VS Artificial Intelligence

- Artificial Intelligence is the ability of machines to perform activities using human-like intelligence.
- Machine Learning is a type of artificial intelligence that allows computers to learn without beign explicitly programmed to do so.
  Machine learning allows computers to learn from data to discover patterns and make predictions.

## Machine Learning Techniques

- **Supervised learning**, every training sample from the dataset has a corresponding label or output value associated with it. As a result, the algorithm learns to predict labels or output values
- **Unsupervised learning**, there are no labels for the training data. A machine learning algorithm tries to learn the underlying patterns or distributions that govern the data.
- **Reinforcement** learning, the algorithm figures out which actions to take in a situation to maximize a reward (in the form of a number) on the way to reaching a specific goal. 

## Traditional Programming VS Machine Learning

![Tradition Programming vs Machine Learning](.\images\tradml.png)

- Traditional Programming can be laborious, because a correct solution would need to consider a vast number of edge cases. Imagine, for example, the challenging task of writing a program that can detect if a cat is present in an image. Solving this in the traditional way would require careful attention to details like varying lighting conditions, different types of cats, and various poses a cat might be in.

- In machine learning, the problem solver abstracts away part of their solution as a flexible component called a *model*, and uses a special program called a *model training algorithm* to adjust that model to real-world data.

- In a way, machine learning automates some of the statistical reasoning and pattern-matching the problem solver would traditionally do

## Fields that influence machine learning

![Fields that influence machine learning](.\images\ml.png)

## Components of Machine Learning 

Nearly all tasks solved with machine learning involve three primary components:

- A machine learning model: is a generic program, made specific by data.

  **A model** is an extremely generic program(or block of code), made specific by the data used to train it. It is used to solve different problems.

- A model training algorithm 

  **Model training algorithms** work through an interactive process where the current model iteration is analyzed to determine what changes can be made to get closer to the goal. Those changes are made and the iteration continues until the model is evaluated to meet the goals.

- A model inference algorithm: Is the process of using a trained model to solve a task.

  **Model inference** is when the trained model is used to generate predictions

> You always need to have an idea of what you're making when you're handling your raw block of clay?
>
> unsupervised learning uses unlabeled data and only works to find the patterns present in data, so you don't always need to have a teapot in mind when you receive your raw block of clay.



## 5 Machine Learning Steps

1. Define the Problem 
2. Build the Dataset
3. Train the Model
4. Evaluate the Model
5. Use the Model

![Steps of Machine Learning](.\images\steps.png)



##### Step One: Define the Problem

1. Be specific
   “Does adding a $1.00 charge for sprinkles on a hot fudge sundae increase the sales of hot fudge sundaes?”

   “Does adding a $0.50 charge for organic flavors in your snow cone increase the sales of snow cones?”

2.  Identify the machine learning task we might use to solve this problem. e.g. Unsupervised and supervised machine learning.

   ![Machine Learning Task and subcategories](.\images\snsupersuper.png)

Machine learning tasks

**How do we classify tasks when we don't have a label?**

Unsupervised learning involves using data that doesn't have a label. One common task is called **clustering**. Clustering helps to determine if there are any naturally occurring groupings in the data.

**Identifying book micro-genres with unsupervised learning**

Imagine that you work for a company that recommends books to readers.

*The assumption*: You are fairly confident that micro-genres exist, and that there is one called *Teen Vampire Romance*. Because you don’t know which micro-genres exist, you can't use **supervised learning** techniques.

This is where the **unsupervised learning** clustering technique might be able to detect some groupings in the data. The words and phrases used in the book description might provide some guidance on a book's micro-genre.

> Regression task involve trying to predict some unknown continuous attribute about your data .

> Classification tasks involve predicting some unknown categorical attribute about your data.

> Clustering tasks involve exploring how your data might be grouped together.




##### Step Two: Build the Dataset

Working with Data

- **Data Collection**: Find and collect data related to the problem you have defined. 
Depending on wether the data collected is labeled or not, determines what the machine learning task will be.

- **Data Inspection**: Explore your dataset looking for **outliers** and **missing or incomplete data**.

  **Transform** Many models prefer numeric data. Does any of the data need to be transformed to work with the model type you are working on.

- **Summary Statistics & Data Visualization**: can be used to identify
  - Trends in the data
  - Scale of the data
  - Shape of the data

- Data Visualization 


##### Step Three: Train the Model
Splitting the dataset
Randomly split the dataset, 80% of the dataset will be used for traing  and 20% for testing. This is done to test against bias-variance  trade-off. 
**Model Training Algorithm**: This algorithm iteratively update **model parameters** to minimize some **loss function**.

**Model Parameters**: are configuration that changes how the model behaves. Depending on the context, weights and biases.

**Loss Function**: is the measurement of how close the model is to its goal. (The goal is to reduce loss function)

> How do I actually implement model training?
Using a machine learning framework

> How do I determine which model to use?
Model selection is not a perfect science, there are many models and many are still being discovered

> Training algorithm hyperparameters
A model or training algorithm have settings called hyperparameter which cannot be changed during model training. This settings can affect how quickly or how reliably the model trains.

> Be prepared to iterate
Foster the habit of trying new thing. You can have assumptions about your data.


**Further Studies**
**Linear models**: Linear models simply describe the relationship between a set of input numbers and a set or output numbers through a linear function (y = mx + c).

Classification Task is often related to logistic model which adds additional transformation mapping the output of the linear function to the range [0,1].

**Tree-based models**: These models learn to categorize or regress by building an extremely large structure of nested if/else blocks.

**Deep learnin models**: The model is composed of collections of neurons connected together by weights. The process of training involves finding values for each weight.
examples include
- FFNN: Feed Foward Neural Network. It structures neurons in a series of layers, with each neuron in a layer containing weights to all neurons in previous layer.
- CNN: Convolutional Neural Network. Represents nested filters over grid-organized data. Commonly used for processing images.
- RNN/LSTM: Recurrent Neural Network(RNN) and the related  Long Shor-Term Memory (LSTM) 



##### Evaluate the Trained Model 
Metric that can be used include
- Precision
- Recall
- Mean Absolute Error
- Log Loss 
- Hinge Loss
- R^2^
- Quantile Loss
- KL Divergence
- F1 Score
etc

Model evalution is an iterative process, that is done until the model produces good results (i.e one might need to retrain the model, or adjust the dataset or even redefine the problem)


##### Step Five: Use the Model
When your model produce a good quality result you can begin to draw inference from your data.
It is also a good practise to monitor the result produced by the model. By monitoring the result you can determine if the model needs to be improved or not.



NOTE: In this course we will be looking at these 3 case studies
> Supervised Learning Task: Predict housing prices for homes and neighborhood based on lot size and numbers of bedrooms.
> Unsupervised Learning Task: Find interesting collection of books in a book dataset on descriptive words in the book description
> Deep Neural Network: To detect chemical spills in a lab from video and images.

> NB: Data Vectorization is the process of turning words into numbers

## House Price Prediction
Assuming the details you have are 
- Room count 
- Lot size
Assuming you believe that a relationship exits between the 
> Because you think you can find either the actual prices for homes recently sold in your neighborhood or generate or generate accurtate estimate for others by asking your realestate appraisers you are working with the supervised learning task.
> Because you are trying to predict some continuous numeric value, the task is recognize to be a regression task.

First you do **data collection** you collect numerous examples of houses sold in your neighorhood. Next you do **data exploration** (are they all numbers). Then you do **data cleaning**, then **Visualise your data**. You can split your data for training.

You can solve the problem using a linear model, evavaluate your model using RMS (Root Mean Square). A good model will have a good RMS.

## Microgenre Exploration
- Identify book trends
- Identify micro-genres
You have a high confidence that other microgenres exists and you believe words and phrases used in the back of the book description,might provide some guidance on which microgenre a book belongs to.
You think machine learning to explore whether books can be grouped in this way.
You anticipate that book with similar content use similar words on the back of the book.
You think microgenres can be represented as groups of books whose description use very similar words.

You define the problem as a clustering problem. You find clusters of similar book based on presence of certain words.
You decide to use clustering approach in unsupervised machine learning.

You collect book text for 800 Romans books published in the current year. You explored your data. You replace capital cases with lower cases because cases don't matter in identifying micro genres. During data cleaning you remove punctuation and words you don't think have useful meaning like a and the.

You can use a python library used for processing human language. 
Data vectorization is the process which turns the words into numbers.
You convert your text into a bag of words representation, that can be understood by machine learning maps.

e.g. 
"Little did he know, she was secretly a vampire." ->
['little', 'does', 'he', 'know', 'is', 'secretly', 'vampire'] ->
Bag of word -> [0, 0, 1, 0, 1, ..]

You can use a clusterin model called K-means. The K in k-means defines how many clusters the model will find. You don't know how many microgenre exists, so you run model training for multiple values of K e.e 2 - 40

Evaluation Metrics:
- Fowlkes-Mallows
- V-measure
- Homogeneity
- Calinski-Harabasz index
- Pair confusion matrix
- Silhouette coefficient
- completeness
- Contingency Matrix
- Rand Index
- Mutual Information
- Davie-Bouldin Index

As you use machine learning you will learn to research these metrics to help you evaluate your model most effectively.

In this case we will use silhouette coeffient 


## Spill Detection from Video
- Fast response time needed
- Automated Detection
You realise you will be able to mobile your janitorial team if you could detect the spills from the plant surveilance system. You investigate using machine learning to perform this automatic detection.
You recognize that you can specify this task as a supervised classification task. Your goal will be the detect if image contains a spill or doesnt contain a spill (Categorical Label). 

- Data Collection - You quickly build a collection of images that contain both spills and non spills in multiple lighting conditions and environments.
- Exploring and Cleaning - You quickly flip through all photos to ensure the spill is clear in shut. 
- Split data for training and testing
- Vectorized - the surveilance system produces only grayscale images. You convert the image to numeric data so the model can process the data.

A human would have to manually label the features in the image, e.g. location are prominent, edges and corners in the image and then train a model on this features. Deep neural networks are the most commonly used tool for the problems like this. Nueral networks can learn the features in an image as long as they have been labeled. CNN (Convolutional Neural Network is a common deeplearning model for processing images) is a good model choice for this task.

Evaluation Metrics:
- Accuracy
- Precision
- Confusion matrix
- ROC curve 
- False positive rate
- False negatice rate 
- Recall
- Log Loss
- Specificity
- F1 Score
- Negative Predictive Value

Steps include:
**Dataset**: Collected, Explored, Cleaned, Split, and Vectorized.
**Model**: CNN
**Evaluation**:
- Value of Accuracy
- Precision
- Recall

