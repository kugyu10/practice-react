import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Hello from './components/Hello';
import Container from './components/ContainerSample';
import Page from './components/ContextSample';
import Counter from './components/Counter';
import PDCA from './components/PDCA';
import { Parent } from './components/Parent';
import { Parent2 } from './components/UseCallBackSample';
import { UseMemoSample } from './UseMemoSample';
import { Clock } from './components/Clock';
import { Parent3 } from './components/UseContextSample';
import { ImageUploader } from './components/UseRefSample';
import { Parent4 } from './components/UseImperativeHandleSample';
import { Input } from './components/CustomHooksSample';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <section>
    <Page />
    <hr />
    <Hello />
    <hr />
    <Container />
    <hr />
    <Counter initialValue={765} />
    <hr />
    <PDCA initialState={0} />
    <hr />
    <Parent />
    <hr />
    <Parent2 />
    <hr />
    <UseMemoSample />
    <hr />
    <Clock />
    <hr />
    <Parent3 />
    <hr />
    <ImageUploader />
    <hr />
    <Parent4 />
    <hr />
    <Input />
  </section>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
