import React, { useState } from "react";
import axios from "axios";

const Test = () => {

    const [form, setForm] = useState({ name: "", email: "" });

    const handleSubmit = (event) => {
        event.preventDefault();

        axios
            .post("http://localhost:3006/user", { form: form })
            .then((res) => {
                console.log(res);
                alert("successful insert");
            })
            .catch((err) => {
                console.log(err);
            });

        setForm({ name: "", email: "" });

    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm((prv) => {
            return {
                ...prv,
                [name]: value,
            };
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>


                <input
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    name="name"
                    placeholder="Name"
                    required
                />
                <input
                    type="text"
                    value={form.email}
                    onChange={handleChange}
                    name="email"
                    placeholder="Email"
                    required
                />
                <input type="submit" value="SUBMIT" />

            </form>

        </div>
    );
}
export default Test;