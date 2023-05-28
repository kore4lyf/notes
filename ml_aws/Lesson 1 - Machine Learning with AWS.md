# Machine Learning on AWS

AWS offers the broadest and deepesr set of ML services and supporting cloud infrastructer

## 1. **AI services**
AI services offers pre-trained AI services that requires no machine learning knowledge. 
- **Health AI** - It turns medical speech to text (e.g. Amazon Transcribe Medical) it is an automatic speech recognition (ASR service). 
- **Industrial AI** - Predicts machine failures (e.g. Amazon Monitron) it uses machine 
- **Anomaly Deection** - Automatically detect and diagnose anomalies (e.g. Amazon Lookout for Metrics) in businesses and operational data. It can be used for solving problems like sudden drop in revenue, coustumer acusition rate etc.
- **Chatbots** - Publish voice or text bots (e.g. Amazon Lex)
- **Personalization** - Deliver highly custumized recommendations (e.g. Amazon Personalize)
- **Forcasting** - Achieve high accuracy forcast (e.g. Achieve high accuracy forcast). It can used for prolblems like Forcasting product demands, resouce needs or Finantial performance.
- **Fraud** - Identify potentially fraudulent activity (e.g Amazon Fraud Detector) .
- **Code Development** - Improve code quality and identify most expensive line of code (e.g. Amazon Codeguru & Devops Guru). It provides inteligent recommendations to improve your code quality
- **Vison** - (e.g. Amazon Recognition) it provides fast and accuracte face search and so on.
- **Speech** - (e.g. Amazon Polly) Allow you to create applications that talk.
- **Text** - (e.g. Amazon Textract) Extract text from document and it performs better than an OCR.
- **Contact Centers** - (e.g. Contact lens) for Amazon connect allows you to analyse conversation between customers and agent by using speech transcription NLP and inteligent search capabilities. It performs sentiment analysis and enable you to automatically analyse contact.
- **Search** - (e.g. Amazon Kendra) Allow you to search through unstructured data and discover the right answers to your questions when you need them.


## ML Services (Build, Train and Deploy machine Learning models fast) AWS 
**Amazon Sage maker** which is a fully managed service, that allow you to make pridiction from you model and also do computer vison.

##### Machine Learning Development Process 
1. Label data
2. Collect and prepare data
3. Store feature
4. Check bias
5. Visualise in notebook
6. Pick algorith
7. Train models
8. Tune parameters
9. Deploy in production
10. Manage and monitor
11. Continous delivery

You may encounter problems in any of these steps listed above, but AWS has some offerings to remove this barrier and make the process easier.

##### ML Services with Amazon Sagemaker
It alloes you bulid and deploy machine learning models fast.
- **Amazon Sagemaker Studio** is AWS's first fully integrated development environment to build, train and deploy ML models at scale.
- **Amazon Sagemaker Distributed Training** - Train large Deep Learning models faster by automatically pertitioning your model and training your data.
- **Amazon Sagemaker clarify** - Brings transparency to your model by detecting bias across the ML workflow and explaining model behaviour.


## Frameworks (AWS)
AWS Workflow services make it easy for you to manage and scale you ML infrastuctures
AWS supports most of the leading ml frameworks such as 
Tensorflow, Pytorch, Mxnet, Keras, Gluon e.t.c.


## Getting started
**AWS DeepRacer** allows you get your hands on (learn) reinforcement learning. Race in global leagues with a fully autonomous reinforcement learning 
**AWS DeepComposer** allows you to collaborate with AI to create music. Here yoi learn generative Artificial inteligence.

## Reinforcement Leaning (RL) with AWS DeepRacer

##### Introduction to Reinforcement Learning (RL)
What is Reinforcement Learning - is one of the three major types of machine learning. 
RL involves learning what actions to take in a situation so as to maximize reward in form of a number on the way to reaching a specific goal.

Its just like training a dog, you reward positive behaviour and and discourge negative behaviour. Over time your dog learns to choose action that result in more treats, and you see more of the behaviour that you incentivized.
Training your computer using RK leverages this idea.


##### Applications of RL
1. Game Development - Board Games, Classic video games, Strategy games
2. Video Game Level Design

> RL agents play games over and over again to collect data for graphs that enable designers to find fun faster

3. RL models can also be used to power robotics in physical devices
4. Industrial robotics
5. Fraud Detection
6. Stock Trading
7. Autonomous Driving

##### RL with AWS DeepRacer 
*RL* Terms - 
**Agent** - 
- An agent is the piece of software you are training is called an agent.
- It makes decision in an environment to reach a goal.
- In AWS DeepRace, the agent is th AWS Deepracer car and its goal is to finish laps around the track as fast as it can while, in some cases, avoiding obstacles.

In AWS DeepRacer the agent is the car and its goal is to finsh laps around the track as fast as it can, while in some cases avoid obstacles.

**Environment** - 
- The environment is the surrounding area our agent interacts with.
- For AWS DeepRacer, this is a track in our simulator or in real life.

**State** - 
-  The state is defined by the current position within the environment that is visible, or known, to an agent.
- In DeepRacer's case, each state is an image captured by its camera.
- The car's initial state is the starting line of the track and its terminal state is when the car finishes a lap, bumps into an obstacle, or drive off the track.


**Action** - 
- For every state, an agent needs to take an action toward achieving its goal.
- A DeepRacer car approaching a turn can choose to accelerate or brake and turn left, right, or go straight.

**Reward** - 
- Feedback is given to an agent for each action it takes in a given state 
- This feedback is a numerical reward.
- A **reward function** is an incentive plan that assigns scores as reward to different zones on the track.

**Episode** - 
- An episode represents a period of trail and error when an agent makes decisions and gets feedback from its environment.
- For DeepRacer an episode begins at the initial state, when the car leaves the starting postion, and ends at the terminal state, when it finishes a lap, bump into an obstacle, or drives off the track.

## Put Your Spin on AWS DeepRacer
Adjust the training algorithm, action space, hyperparameters, and reward function to make AWS DeepRacer yours. 
- An algorithm is a set of instructions
- The training algorithm tells the model to gather as many rewards as possible:
	- It defines the learning objective (Maximize total cumulative reward)

##### Choose Your Strategy
DeepRacer uses 2 training algorithms: 
- Soft Actor Critic (SAC)
- Proximal Policy Optimization (PPO)

SAC embraces exploration, it is data efficient but can lack stability.
PPO is stable but data-hungry

#####Define What's Possible
Action space is the set of all valid actions, or choices, availabel to an agent as it interacts with an environment.

- A discrete action space represents all of an agent's possible actions for each state in a finite set of steering angle and throttle value combination.
**Discrete**: finite set of possible actions

- A continuous action space allows the agent to select an action from a range of values that you define for each state.
SAC algorithm only works in a continous action space.
PPO works in both continuous and discrete action spaces.

##### Tune the Variable
- **Hyperparameters** are variables that control the performance of your agent during training.
There are varieties of different categories to experiment with. Change the values to increase or decrease the influence of different parts of your model.

**Learning Rate**: A hyperparameter that controls how many new experiences are counted in learning at each step. A higher learning rate results in a faster training but may reduce model's quality.

**Reward Function**: The reward function is a tool for designing an incentive plan that will encourage your agent to reach its goal. 
Figuring out how to reward which actions is one of your most important jobs.


## Putting Learning into Action with AWS DeepRacer
##### Exploration VS Exploitation
Exploration VS Exploitation is a key challenge in reinforcement learning. 
Exploration - Wondering to discover (During Training)
Exploitation - Using experience to decide (After Training)

DeepRacer takes about 15 pictures per second as it drives around the track. Each picture represents a state. After each picture DeepRacer takes an action like changing its speed or steering angle.



## Summary
AWS DeepRacer is a 1/18th scale racing car, with the objective being to drive around a track as fast as possible. To achieve this goal, AWS DeepRacer uses reinforcement learning.

The **agent** is the AWS DeepRacer car (or, more specifically, the software running on the car);
The agent wants to achieve the goal of finishing laps around the track as fast as possible, so the track is the **environment**.
The agent knows about the environment through the **state** which is the portion of the environment known to the agent. In the case of AWS DeepRacer, it is the images being captured by the camera.
Once the agent knows its state in the environment, it can perform **actions** in the environment to help it achieve its goal. **In the case of DeepRacer, this might be accelerating, braking, turning left, turning right, or going straight**.
The agent then receives **feedback** in the form of a reward about how well that action contributed towards achieving its goal.
And all this happens within an episode. This can be thought of as a cycle of the agent performing an action in the environment (based upon the state it has observed) and then receiving feedback in the form of a reward which informs future actions it might take.


## ALGORITH TRAINING 
A policy defines the action that the agent should take for a given state. This could conceptually be represented as a table - given a particular state, perform this action.

This is called a deterministic policy, where there is a direct relationship between state and action. This is often used when the agent has a full understanding of the environment and, given a state, always performs the same action.

Consider the classic game of rock, paper, scissors. An example of a deterministic policy is always playing rock. Eventually the other players are going to realize that you are always playing rock and then adapt their strategy to win, most likely by always playing paper. So in this situation it’s not optimal to use a deterministic policy.

So, we can alternatively use a stochastic policy. In a stochastic policy you have a range of possible actions for a state, each with a probability of being selected. When the policy is queried to return an action for a state it selects one of these actions based on the probability distribution.

This would obviously be a much better policy option for our rock, paper, scissors game as our opponents will no longer know exactly which action we will choose each time we play.

You might now be asking, with a stochastic policy how do you determine the value of being in a particular state and update the probability for the action which got us into this state? This question can also be applied to a deterministic policy; how do we pick the action to be taken for a given state?

Well, we somehow need to determine how much benefit we have derived from that choice of action. We can then update our stochastic policy and either increase or decrease the probability of that chosen action being selected again in the future, or select the specific action with the highest likelihood of future benefit as in our deterministic policy.

If you said that this is based on the reward, you are correct. However, the reward only gives us feedback on the value of the single action we just chose. To truly determine the value of that action (and resulting state) we should not only look at the current reward, but future rewards we could possibly get from being in this state.
 
 
## 



































