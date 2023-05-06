import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notifications from './Notifications/Notifications';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

export const App =() => {
const [good, setGood] = useState(0);
const [neutral, setNeutral] = useState(0);
const [bad, setBad] = useState(0);


const updateFeedback = evt => {
const {name} = evt.target;
switch(name) {
case 'good':
    setGood(good + 1);
    break;
case 'neutral':
    setNeutral(neutral + 1);
    break;
case 'bad':
    setBad(bad + 1);
    break;
default:
    break;
}
};

const totalFeedback = () => {
return good + neutral + bad;
};

const positivePercentage = () => {
const total = totalFeedback();
return total ? Math.round((good * 100) / total) : 0;
};

const options = ['good', 'neutral', 'bad'];


return(
<>

<Section title='Please leave feedback'>
<FeedbackOptions 
options={options}
updateFeedback={updateFeedback}
/>
</Section>

{totalFeedback() ? (
<Section title='Statistics'>
<Statistics 
good={good}
neutral={neutral}
bad={bad}
total={totalFeedback()}
positivePercentage={positivePercentage()}
/>
</Section>
) : (
<Notifications message='There is no feedback' />
)}
</>
);
};