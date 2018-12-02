import React, {Fragment} from 'react';
import {useStore, store} from '../hookstore';
import {Button} from 'reactstrap';
import {withRouter} from 'react-router-dom';

store.state = 0;

const Test = ({...props}) => {
// using the useStore hook
  const [timesClicked, updateTimesClicked] = useStore();
  console.log(timesClicked)
  if(timesClicked > 10) {
	props.history.push('/login')
  }
  return (
    <div>
      <h2>The button inside this component was clicked {timesClicked} times</h2>
      <button type="button" onClick={() => updateTimesClicked(timesClicked + 1)}>
        Update
      </button>
    </div>
  );
}

export default withRouter(Test);