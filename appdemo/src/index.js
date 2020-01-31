import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './routes';

export default function index() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0277BD" />
      <Routes />
    </>
  );
}
