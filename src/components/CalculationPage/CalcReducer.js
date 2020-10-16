export const initialCalcState = {
    selectedMonth: '',
    selectedYear: '',
    selectedEmployee: '',
    operations: [],
    defaultSalaryPerDay: '',
    workingDays: '',
    defaultSalary: '',
    unloadOperationsSum: '',
    unload: '',
    unloadPercentage: ''
}

export const calcActions = {
    CREATE_TABLE: 'CREATE_TABLE',
    ADD_NEW_OPERATION: 'ADD_NEW_OPERATION',
    UPDATE_OPERATIONS: 'UPDATE_OPERATIONS',
    UPDATE_UNLOAD_INPUT: 'UPDATE_UNLOAD_INPUT',
    UPDATE_UNLOAD_OPERATIONS_SUM: "UPDATE_UNLOAD_OPERATIONS_SUM",
    UPDATE_DEFAULT_SALARY: 'UPDATE_DEFAULT_SALARY',
    UPDATE_UNLOAD: 'UPDATE_UNLOAD',
    UPDATE_UNLOAD_PERCENTAGE: 'UPDATE_UNLOAD_PERCENTAGE',
    UPDATE_TOTAL_SUM: 'UPDATE_TOTAL_SUM'
}

export const calcReducer = (state, {type, payload}) => {
    switch (type) {
        case calcActions.CREATE_TABLE:
            return {
                ...state,
                ...payload
            }
        case calcActions.ADD_NEW_OPERATION:
            return {
                ...state,
                operations: [...state.operations, payload.newOperation]
            }
        case calcActions.UPDATE_OPERATIONS:
            return {
                ...state,
                operations: payload.operations
            }
        case calcActions.UPDATE_UNLOAD_INPUT:
            return {
                ...state,
                [payload.path]: payload.value
            }
        case calcActions.UPDATE_UNLOAD_OPERATIONS_SUM:
            return {
                ...state,
                unloadOperationsSum: payload.unloadOperationsSum
            }
        case calcActions.UPDATE_DEFAULT_SALARY:
            return {
                ...state,
                defaultSalary: payload.defaultSalary
            }
        case calcActions.UPDATE_UNLOAD:
            return {
                ...state,
                unload: payload.unload
            }
        case calcActions.UPDATE_UNLOAD_PERCENTAGE:
            return {
                ...state,
                unloadPercentage: payload.unloadPercentage
            }
        case calcActions.UPDATE_TOTAL_SUM:
            return {
                ...state,
                totalSum: payload.totalSum
            }
        default:
            return state
    }
}
