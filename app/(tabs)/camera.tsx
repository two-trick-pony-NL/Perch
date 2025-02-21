import CameraComponent from "@/screens/camera"
import {Alert } from 'react-native';

export default () => <CameraComponent onCapture={(uri: string) => Alert.alert('Photo Taken', uri)} />