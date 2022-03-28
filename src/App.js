import './App.css';
import { useDisclosure } from '@chakra-ui/react';
import ManageEmployee from './components/ManageEmployee';
import EmployeeList from './components/EmployeeList';
import { useRef, useState } from 'react';
import Navbar from './components/Navbar';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  const initialRef = useRef();
  const [employee, setEmployee] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const openHandler = (id, employee) => {
    setEmployee({id, ...employee});
    onOpen();
  }

  return (
    <Provider store={store}>
      <ChakraProvider theme={extendTheme()}>
        <Navbar onOpen={onOpen} />
        <ManageEmployee
          isOpen={isOpen}
          onClose={onClose}
          initialRef={initialRef}
          employee={employee}
          setEmployee={setEmployee}
        />
        <EmployeeList
          openHandler={openHandler}
        />
      </ChakraProvider>
    </Provider>
  );
}

export default App;
