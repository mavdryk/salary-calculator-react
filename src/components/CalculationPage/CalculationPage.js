import React, {useEffect, useReducer, useState} from 'react'
import _ from 'lodash'

import './calculationPage.scss'

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {years, months} from "../../utils/date";
import employees from "../../utils/employees";
import operations from "../../utils/operations";
import Button from "@material-ui/core/Button";

import CalculationTable from "../CalculationTable/CalculationTable";
import { initialCalcState, calcActions, calcReducer} from './CalcReducer'

const CalculationPage = () => {
    let [calcData, calcDispatch] = useReducer(calcReducer, initialCalcState)
    let [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
    let [selectedMonth, setSelectedMonth] = useState({
        id: '',
        name: ''
    })
    let [selectedEmployee, setSelectedEmployee] = useState('')
    let [showCalcTable, setShowCalcTable] = useState(false)

    useEffect(function () {
        if (selectedMonth.id === '') {
            setSelectedMonth(_.find(months, ['id', 'january']))
        }

        if (selectedEmployee === '') {
            setSelectedEmployee('berbeka')
        }
    }, [])

    useEffect(function () {
        if (selectedEmployee !== '' && selectedMonth.id !== '' && !showCalcTable) {
            createTable();
        }
    }, [selectedEmployee, selectedMonth.id, showCalcTable])

    function handleYearChange(event) {
        setSelectedYear(event.target.value)
    }

    function handleMonthChange(event) {
        setSelectedMonth(_.find(months, ['id', event.target.value]))
    }

    function handleEmployeeChange(event) {
        setSelectedEmployee(event.target.value)
    }

    function createTable() {
        let employee = _.find(employees, ['id', selectedEmployee])

        calcDispatch({
            type: calcActions.CREATE_TABLE,
            payload: {
                selectedMonth: selectedMonth.id,
                selectedYear: selectedYear,
                selectedEmployee: selectedEmployee,
                operations: _.chain(employee.defaultOperations)
                    .map((operation) => {
                        return _.cloneDeep(_.find(operations, ['id', operation]))
                    })
                    .compact()
                    .value(),
                defaultSalaryPerDay: '',
                workingDays: '',
                defaultSalary: '',
                unloadOperationsSum: '',
                unload: '',
                unloadPercentage: ''
            }
        })
        setShowCalcTable(true)
    }

    return (
        <div className="calc-page">
            <div className="calc-page-header">
                <FormControl className="select-control">
                    <InputLabel id="select-year">Рік</InputLabel>
                    <Select labelId="select-year"
                            value={selectedYear}
                            onChange={handleYearChange}
                    >
                        {years.map(year => {
                            return (
                                <MenuItem key={year} value={year}>{year}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
                <FormControl className="select-control">
                    <InputLabel id="select-month">Місяць</InputLabel>
                    <Select labelId="select-month"
                            value={selectedMonth.id}
                            onChange={handleMonthChange}
                    >
                        {months.map(month => {
                            return (
                                <MenuItem key={month.id} value={month.id}>{month.name}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
                <FormControl className="select-control">
                    <InputLabel id="select-employee">Працівник</InputLabel>
                    <Select labelId="select-employee"
                            value={selectedEmployee}
                            onChange={handleEmployeeChange}
                    >
                        {employees.map(employee => {
                            return (
                                <MenuItem key={employee.id} value={employee.id}>{employee.name}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
                <Button variant="contained"
                        color="primary"
                        onClick={createTable}
                        disabled={(!selectedYear || !selectedMonth || !selectedEmployee) || selectedEmployee === calcData.selectedEmployee}>
                    Створити таблицю
                </Button>
            </div>
            <div className="calc-page-body">
                {showCalcTable && <CalculationTable calcData={calcData}
                                                    calcDispatch={calcDispatch}/>}
            </div>
        </div>
    )
}

export default CalculationPage
