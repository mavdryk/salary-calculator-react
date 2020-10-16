import React, {useEffect} from 'react'
import _ from 'lodash'

import './operationRow.scss'
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";

let timerId = null

const OperationRow = ({index, operation, onOperationValueChange, onOperationNameChange, onOperationUnloadChange}) => {
    const onInputChange = (event, changedOperation, path) => {
        let inputValue = event.target.value
        let inputChecked = event.target.checked

        clearTimeout(timerId);

        timerId = setTimeout(() => {
            if (path === 'name') {
                onOperationNameChange(changedOperation, inputValue)
            } else if (path === 'unload') {
                onOperationUnloadChange(changedOperation, inputChecked, path)
            } else {
                onOperationValueChange(changedOperation, inputValue, path)
            }
        }, 100)
    }

    return (
        <TableRow className="table-row">
            <TableCell className="cell operation-index" component="th" scope="row">
                {index + 1}
            </TableCell>
            <TableCell className="cell operation-name">
                <div className="operation-name-content">
                    <TextField className="table-input"
                               size="small"
                               variant="outlined"
                               defaultValue={operation.name}
                               onChange={event => onInputChange(event, operation, 'name')}/>
                    <Checkbox
                        checked={operation.unload}
                        onChange={event => onInputChange(event, operation, 'unload')}
                        inputProps={{'aria-label': 'primary checkbox'}}
                    />
                </div>
            </TableCell>
            <TableCell className="cell operation-amount">
                <TextField className="table-input"
                           size="small"
                           type="number"
                           variant="outlined"
                           defaultValue={operation.amount}
                           onChange={event => onInputChange(event, operation, 'amount')}/>
            </TableCell>
            <TableCell className="cell operation-price">
                <TextField className="table-input"
                           size="small"
                           type="number"
                           variant="outlined"
                           defaultValue={operation.price}
                           onChange={event => onInputChange(event, operation, 'price')}/>
            </TableCell>
            <TableCell className="cell operation-percentage">
                <TextField className="table-input"
                           size="small"
                           type="number"
                           variant="outlined"
                           defaultValue={operation.percentage}
                           onChange={event => onInputChange(event, operation, 'percentage')}/>
            </TableCell>
            <TableCell className="cell operation-sum">{operation.sum}</TableCell>
            <TableCell className="cell operation-actions">Del</TableCell>
        </TableRow>
    )
}

export default React.memo(OperationRow, _.isEqual)
