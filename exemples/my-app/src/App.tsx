import { useState } from 'react';
import Cron, { CronError } from 'react-js-cron';
import {Divider, Input} from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons/lib/icons';
import { useCronReducer } from './utils.stories';

function App() {

  const [values, dispatchValues] = useCronReducer("")
  const [error, onError] = useState<CronError>()

  return (
    <div>
      <Input
        value={values.inputValue}
        onChange={(event) => {
          dispatchValues({
            type: 'set_input_value',
            value: event.target.value,
          })
        }}
        onBlur={() => {
          dispatchValues({
            type: 'set_cron_value',
            value: values.inputValue,
          })
        }}
        onPressEnter={() => {
          dispatchValues({
            type: 'set_cron_value',
            value: values.inputValue,
          })
        }}
      />

      <Divider>OR</Divider>

      <Cron
        value={values.cronValue}
        setValue={(newValue: string) => {
          dispatchValues({
            type: 'set_values',
            value: newValue,
          })
        }}
        onError={onError}
      />

      <div>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          Double click on a dropdown option to automatically select / unselect a
          periodicity
        </span>
      </div>

      <p style={{ marginTop: 20 }}>
        Error: {error ? error.description : 'undefined'}
      </p>
    </div>
  );
}

export default App;
