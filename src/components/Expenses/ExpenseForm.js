import React, {useState} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';


const initialState = {
    date:'',
    category: 'none',
    amount: '00.00',
    currency: 'none',
    description: 'description(optional)'
}

function ExpenseForm() {
    const [state, setState] = useState(initialState)

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        setState({
        target: value
        });
    }

    const handleSubmit = (event) => {
        window.location.hash=''
        console.log(state)
    }

    return (
        <div className='expenses__form'>
            <Formik
                initialValues={{ 
                    date: '', 
                    category: '', 
                    amount:'00.00', 
                    currency:'INR', 
                    description:'Description' 
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    }, 400);
                }}
                >
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="datetime-local" name="date" required />
                        <Field as="select" name="category" required>
                            <option value="none" selected disabled hidden>Category</option>
                            <option value="Home">Home</option>
                            <option value="Food">Food</option>
                            <option value="Fuel">Fuel</option>
                            <option value="Shopping">Shopping</option>
                            <option value="Other">Other</option>
                        </Field>
                        <Field type="number" name="amount" required/>
                        <Field as="select" name="currency" required>
                            <option value="INR">INR</option>
                            <option value="USD">USD</option>
                            <option value="GBP">GBP</option>
                            <option value="EUR">EUR</option>
                        </Field>
                        <Field type="text" name="description" />
                        <button type="submit" disabled={isSubmitting}>Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default ExpenseForm
