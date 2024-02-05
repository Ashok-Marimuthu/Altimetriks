import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CarState {
  cars: any;
}

const initialState: CarState = {
  cars: [
    {
      "Photo": "file:///Users/ashok/Library/Developer/CoreSimulator/Devices/741EF843-7758-4035-9B41-6BD1931AD99E/data/Media/DCIM/100APPLE/IMG_0004.JPG",
      "brand": "maruti",
      "color": "Red",
      "externalFitments": "Yes",
      "index": 0,
      "insuranceValidUpto": "2L-4L",
      "kms": "1000",
      "locations": "Coimbatore",
      "modal": "Suzuki",
      "numberOfOwners": "2",
      "transmission": "Automatic",
      "yearOfManufacture": "2018"
    },
    {
      "Photo": "file:///Users/ashok/Library/Developer/CoreSimulator/Devices/741EF843-7758-4035-9B41-6BD1931AD99E/data/Media/DCIM/100APPLE/IMG_0004.JPG",
      "brand": "maruti",
      "color": "Red",
      "externalFitments": "Yes",
      "index": 1,
      "insuranceValidUpto": "2L-4L",
      "kms": "1000",
      "locations": "Coimbatore",
      "modal": "Suzuki",
      "numberOfOwners": "2",
      "transmission": "Automatic",
      "yearOfManufacture": "2018"
    },
    {
      "Photo": "file:///Users/ashok/Library/Developer/CoreSimulator/Devices/741EF843-7758-4035-9B41-6BD1931AD99E/data/Media/DCIM/100APPLE/IMG_0004.JPG",
      "brand": "benz",
      "color": "Red",
      "externalFitments": "Yes",
      "index": 2,
      "insuranceValidUpto": "2L-4L",
      "kms": "1000",
      "locations": "Coimbatore",
      "modal": "bmw",
      "numberOfOwners": "2",
      "transmission": "Automatic",
      "yearOfManufacture": "2018"
    },
    {
      "Photo": "file:///Users/ashok/Library/Developer/CoreSimulator/Devices/741EF843-7758-4035-9B41-6BD1931AD99E/data/Media/DCIM/100APPLE/IMG_0004.JPG",
      "brand": "tata",
      "color": "Red",
      "externalFitments": "Yes",
      "index": 3,
      "insuranceValidUpto": "2L-4L",
      "kms": "1000",
      "locations": "Coimbatore",
      "modal": "swift",
      "numberOfOwners": "2",
      "transmission": "Automatic",
      "yearOfManufacture": "2018"
    },
    {
      "Photo": "file:///Users/ashok/Library/Developer/CoreSimulator/Devices/741EF843-7758-4035-9B41-6BD1931AD99E/data/Media/DCIM/100APPLE/IMG_0004.JPG",
      "brand": "hyundai",
      "color": "Red",
      "externalFitments": "Yes",
      "index": 4,
      "insuranceValidUpto": "2L-4L",
      "kms": "1000",
      "locations": "Coimbatore",
      "modal": "wagon",
      "numberOfOwners": "2",
      "transmission": "Automatic",
      "yearOfManufacture": "2018"
    }
  ],
};

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    addCar: (state, action: PayloadAction<{ car: any }>) => {
      state.cars.push(action.payload.car);
    },
    updateCar: (state, action: PayloadAction<{ index: number; car: any }>) => {
      state.cars[action.payload.index] = action.payload.car;
    },
  },
});

export const { addCar, updateCar } = carSlice.actions;
export default carSlice.reducer;
