import React from 'react';
export interface DailyTopicPanelProps {
  children?: React.ReactNode;

  index: any;

  value: any;

  //the property of the object returned by the API where is the text
}
export default function TabPanel({ index, value, children }: DailyTopicPanelProps) {
  return (
    <div style={{ padding: '6px 12px' }} hidden={value !== index}>
      {children}
    </div>
  );
}
