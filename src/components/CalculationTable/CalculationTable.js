import React, {useCallback, useEffect, useState} from 'react'
import _ from 'lodash'
import cyrillicToTranslit from 'cyrillic-to-translit-js';

import './calculationTable.scss'
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableFooter from "@material-ui/core/TableFooter";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import operations from "../../utils/operations";
import {round} from "../../utils/calculation";
import OperationRow from "./OperationRow/OperationRow";
import {calcActions} from "../CalculationPage/CalcReducer";
import employees from "../../utils/employees";
import {months} from "../../utils/date";

const CalculationTable = ({calcData, calcDispatch}) => {
    let [selectedOperation, setSelectedOperation] = useState('')
    let [selectedEmployeeData, setSelectedEmployeeData] = useState({})
    let [selectedMonthData, setSelectedMonthData] = useState({})

    const calculateDefaultSalary = useCallback(() => {
        const workDays = calcData.workingDays;
        const salPerDay = calcData.defaultSalaryPerDay;
        let defaultSalary = 0

        if (!_.isNil(workDays) && workDays > 0 && !_.isNil(salPerDay) && salPerDay > 0) {
            defaultSalary = round(workDays * salPerDay)
        }

        calcDispatch({
            type: calcActions.UPDATE_DEFAULT_SALARY,
            payload: {
                defaultSalary
            }
        })
    }, [calcData.workingDays, calcData.defaultSalaryPerDay, calcDispatch])

    const calculateUnloadOperationsSum = useCallback(() => {
        let unloadOperationsSum = _.reduce(calcData.operations, (result, operation) => {
            return result + (operation.unload && operation.sum > 0 ? operation.sum : 0);
        }, 0)

        calcDispatch({
            type: calcActions.UPDATE_UNLOAD_OPERATIONS_SUM,
            payload: {
                unloadOperationsSum: round(unloadOperationsSum)
            }
        })

    }, [calcData.operations, calcDispatch])

    const calculateUnload = useCallback(() => {
        let unload = 0;

        if (calcData.unloadOperationsSum > 0 && calcData.defaultSalary > 0) {
            unload = round(calcData.unloadOperationsSum - calcData.defaultSalary)
        }

        calcDispatch({
            type: calcActions.UPDATE_UNLOAD,
            payload: {
                unload: round(unload)
            }
        })
    }, [calcData.unloadOperationsSum, calcData.defaultSalary, calcDispatch])

    const calculateUnloadPercentage = useCallback(() => {
        let unloadPercentage = 0;

        if (calcData.unload > 0) {
            unloadPercentage = round(calcData.unload * 0.1)
        }

        calcDispatch({
            type: calcActions.UPDATE_UNLOAD_PERCENTAGE,
            payload: {
                unloadPercentage: round(unloadPercentage)
            }
        })
    }, [calcData.unload, calcDispatch])

    const calculateTotalSum = useCallback(() => {
        let totalSum = 0;

        totalSum = _.reduce(calcData.operations, function(result, operation) {
            return result + (operation.sum > 0 ? operation.sum : 0)
        }, totalSum)

        totalSum += calcData.unloadPercentage

        calcDispatch({
            type: calcActions.UPDATE_TOTAL_SUM,
            payload: {
                totalSum: round(totalSum)
            }
        })
    }, [calcData.operations, calcData.unloadPercentage, calcDispatch])

    useEffect(function () {
       setSelectedEmployeeData(_.find(employees, ['id', calcData.selectedEmployee]))
    }, [calcData.selectedEmployee])
    useEffect(function () {
        setSelectedMonthData(_.find(months, ['id', calcData.selectedMonth]))
    }, [calcData.selectedMonth])
    useEffect(function () {
        calculateDefaultSalary();
    }, [calculateDefaultSalary])
    useEffect(function () {
        calculateUnloadOperationsSum()
    }, [calculateUnloadOperationsSum])
    useEffect(function () {
        calculateUnload()
    }, [calculateUnload])
    useEffect(function () {
        calculateUnloadPercentage()
    }, [calculateUnloadPercentage])
    useEffect(function () {
        calculateTotalSum()
    }, [calculateTotalSum])

    const addDefaultOperation = () => {
        let defaultOperation = _.cloneDeep(_.find(operations, ['id', selectedOperation]))

        calcDispatch({
            type: calcActions.ADD_NEW_OPERATION,
            payload: {
                newOperation: defaultOperation
            }
        })

        setSelectedOperation('')
    }

    const addNewOperation = () => {
        calcDispatch({
            type: calcActions.ADD_NEW_OPERATION,
            payload: {
                newOperation: {
                    name: '',
                    id: Math.floor(Math.random() * 10000),
                    index: Math.floor(Math.random() * 10000),
                    unload: false,
                    price: '',
                    amount: '',
                    sum: ''
                }
            }
        })
    }


    const onOperationValueChange = useCallback((changedOperation, value, path) => {
        let operations = _.map(_.cloneDeep(calcData.operations), (operationItem) => {
            let operation = _.cloneDeep(operationItem)

            if (operation.id === changedOperation.id) {
                _.set(operation, path, Number(value))

                if (operation.amount > 0 && operation.price > 0) {
                    operation.sum = round(operation.amount * operation.price)

                    if (!_.isNil(operation.percentage) && operation.percentage !== 0) {
                        operation.sum = round(operation.sum + operation.sum * (operation.percentage / 100))
                    }
                } else {
                    _.unset(operation, 'sum')
                }
            }

            return operation;
        });

        calcDispatch({
            type: calcActions.UPDATE_OPERATIONS,
            payload: {
                operations: operations,
            }
        })
    }, [calcData.operations, calcDispatch])

    const onOperationNameChange = useCallback((changedOperation, value) => {
        let operations = _.map(_.cloneDeep(calcData.operations), (operationItem) => {
            let operation = _.cloneDeep(operationItem)

            if (operation.id === changedOperation.id) {
                _.set(operation, 'name', _.capitalize(value))

                let id = !_.isEmpty(value) ?
                    _.camelCase(new cyrillicToTranslit({preset: 'uk'}).transform(value)) :
                    Math.round(Math.random() * 100000)

                _.set(operation, 'id', id)
            }

            return operation;
        });

        calcDispatch({
            type: calcActions.UPDATE_OPERATIONS,
            payload: {
                operations: operations
            }
        })
    }, [calcData.operations, calcDispatch])

    const onOperationUnloadChange = useCallback((changedOperation, value, path) => {
        let operations = _.map(_.cloneDeep(calcData.operations), (operationItem) => {
            let operation = _.cloneDeep(operationItem)

            if (operation.id === changedOperation.id) {
                _.set(operation, path, value)
            }

            return operation;
        });

        calcDispatch({
            type: calcActions.UPDATE_OPERATIONS,
            payload: {
                operations: operations
            }
        })
    }, [calcData.operations, calcDispatch])

    const onSelectOperation = (event) => {
        setSelectedOperation(event.target.value)
    }

    const onUnloadInputChange = (event, path) => {
        calcDispatch({
            type: calcActions.UPDATE_UNLOAD_INPUT,
            payload: {
                path: path,
                value: event.target.value
            }
        })
    }

    return (
        <TableContainer component={Paper}>
            <Table className="calc-table" size="small" aria-label="simple table">
                <TableHead className="table-header">
                    <TableRow className="table-row">
                        <TableCell
                            className="cell"
                            colSpan={10}>{selectedEmployeeData.name + ' (' + selectedMonthData.name + ' ' + calcData.selectedYear + ')'}
                        </TableCell>
                    </TableRow>
                    <TableRow className="table-row">
                        <TableCell className="cell operation-index">#</TableCell>
                        <TableCell className="cell operation-name">Операція</TableCell>
                        <TableCell className="cell operation-amount">Кількість</TableCell>
                        <TableCell className="cell operation-price">Розцінка</TableCell>
                        <TableCell className="cell operation-percentage">%</TableCell>
                        <TableCell className="cell operation-sum">Сума</TableCell>
                        <TableCell className="cell operation-actions"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {calcData.operations.map((operation, index) => {
                        return (
                            <OperationRow key={selectedEmployeeData.id + String(index)}
                                          index={index}
                                          operation={operation}
                                          onOperationValueChange={onOperationValueChange}
                                          onOperationNameChange={onOperationNameChange}
                                          onOperationUnloadChange={onOperationUnloadChange}/>
                        )
                    })}
                </TableBody>
                <TableFooter className="table-footer">
                    <TableRow className="table-row">
                        <TableCell colSpan={10}>
                            <div className="table-footer-cell-content">
                                <FormControl className="select-control">
                                    <InputLabel id="select-operation">Операція</InputLabel>
                                    <Select labelId="select-operation"
                                            value={selectedOperation}
                                            onChange={onSelectOperation}
                                    >
                                        {operations.map(operation => {
                                            return (
                                                <MenuItem key={operation.id}
                                                          value={operation.id}>{operation.name}</MenuItem>
                                            )
                                        })}
                                    </Select>
                                </FormControl>
                                <Button className="footer-btn"
                                        variant="contained"
                                        color="primary"
                                        disabled={_.isEmpty(selectedOperation)}
                                        onClick={addDefaultOperation}>
                                    Додати операцію
                                </Button>
                                <Button className="footer-btn"
                                        variant="contained"
                                        color="primary"
                                        onClick={addNewOperation}>
                                    Додати нову операцію
                                </Button>
                            </div>
                        </TableCell>
                    </TableRow>
                    <TableRow className="table-row">
                        <TableCell className="cell" colSpan={2}>
                            <div className="footer-controls">
                                <div className="input-fields">
                                    <TextField size="small"
                                               label="Днів"
                                               type="number"
                                               variant="outlined"
                                               defaultValue={calcData.workingDays}
                                               onChange={event => onUnloadInputChange(event, 'workingDays')}/>
                                    <TextField size="small"
                                               label="грн/день"
                                               type="number"
                                               variant="outlined"
                                               defaultValue={calcData.defaultSalaryPerDay}
                                               onChange={event => onUnloadInputChange(event, 'defaultSalaryPerDay')}/>
                                </div>
                                <div className="result-fields">
                                    <div className="unload-operations-sum">Unload operations sum: {calcData.unloadOperationsSum}</div>
                                    <div className="default-salary">Default salary: {calcData.defaultSalary}</div>
                                    <div className="unload">Unload: {calcData.unload}</div>
                                    <div className="unload-percentage">Unload 10%: {calcData.unloadPercentage}</div>
                                </div>
                            </div>
                        </TableCell>
                        <TableCell className="cell" colSpan={2}>
                            Загальна сума
                        </TableCell>
                        <TableCell className="cell" colSpan={3}>
                            {calcData.totalSum}
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    )
}

export default CalculationTable
