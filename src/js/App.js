import React from 'react';
import ReactDOM from 'react-dom';
import Style from '../css/main.css';
import Table from './Table';
import Modal from './Modal';

ReactDOM.render(<div>
                    <Table />
                    <Modal/>
                </div>, document.getElementById('root'));
