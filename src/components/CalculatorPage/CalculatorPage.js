import React, {useState} from 'react'

import './calculatorPage.scss'

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import {years, months} from "../../utils/date";
import {employees} from "../../utils/employees";

const CalculatorPage = () => {
    let [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
    let [selectedMonth, setSelectedMonth] = useState('')
    let [selectedEmployee, setSelectedEmployee] = useState('')

    function handleYearChange(event) {
        setSelectedYear(event.target.value)
    }

    function handleMonthChange(event) {
        setSelectedMonth(event.target.value)
    }

    function handleEmployeeChange(event) {
        setSelectedEmployee(event.target.value)
    }

    return (
        <div className="calc-page">
            <FormControl className="year">
                <InputLabel id="select-year">Year</InputLabel>
                <Select
                    labelId="select-year"
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
            <FormControl className="month">
                <InputLabel id="select-month">Month</InputLabel>
                <Select
                    labelId="select-month"
                    value={selectedMonth}
                    onChange={handleMonthChange}
                >
                    {months.map(month => {
                        return (
                            <MenuItem key={month.id} value={month.name}>{month.name}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
            <FormControl className="employee">
                <InputLabel id="select-employee">Employee</InputLabel>
                <Select
                    labelId="select-employee"
                    value={selectedEmployee}
                    onChange={handleEmployeeChange}
                >
                    {employees.map(employee => {
                        return (
                            <MenuItem key={employee.id} value={employee.name}>{employee.name}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        </div>
    )
}

export default CalculatorPage
