import { useState } from "react"

export default function useForm(incomingForm) {
    const [form, setForm] = useState(incomingForm)

    function formHandler(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return { form, formHandler }
}