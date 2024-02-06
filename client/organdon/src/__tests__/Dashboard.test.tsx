// /// <reference types="@testing-library/jest-dom" />

// import { render, screen, fireEvent } from '@testing-library/react';
// import Dashboard from '../pages/Dashboard';
// import { useSelector } from 'react-redux';

// // Mocking the useSelector hook from react-redux
// jest.mock('react-redux', () => ({
//   useSelector: jest.fn(),
// }));

// describe('Dashboard Component', () => {
//   beforeEach(() => {
//     // Mocking the useSelector hook to return mock data
//     useSelector.mockReturnValue({
//       token: 'mockToken',
//     });
//   });

//   test('renders Dashboard component', () => {
//     render(<Dashboard />);
//     // Check if the component renders without crashing
//     expect(screen.getByText('Filter')).toBeInTheDocument();
//   });

//   test('filtering by distance updates state', () => {
//     render(<Dashboard />);
//     // Find and click on the distance filter option
//     fireEvent.click(screen.getByText('Filter'));
//     fireEvent.click(screen.getByText('Distance'));
//     fireEvent.click(screen.getByText('50 km'));
//     // Check if the distance state is updated
//     expect(screen.getByText('Distance 50 km')).toBeInTheDocument();
//   });

//   test('filtering by organ type updates state', () => {
//     render(<Dashboard />);
//     // Find and click on the organ type filter option
//     fireEvent.click(screen.getByText('Filter'));
//     fireEvent.click(screen.getByText('Organ type'));
//     fireEvent.click(screen.getByText('Heart'));
//     // Check if the organ type state is updated
//     expect(screen.getByText('Organ type Heart')).toBeInTheDocument();
//   });
// });
