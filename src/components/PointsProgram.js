import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';


const Programs = () => {

    async function createProgram(body) {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/program`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        const newProgram = await response.json()
        console.log(newProgram)
    }

    const submitCreateForm = (e) => {
        e.preventDefault();
        const { name, description, organizer, email, tokenName, tokenSymbol, image, rewardRate } = e.target.elements;
        const payload = {
            name: name.value,
            description: description.value,
            organizer: organizer.value,
            email: email.value,
            tokenName: tokenName.value,
            tokenSymbol: tokenSymbol.value,
            image: image.value,
            settings: { rewardRate: rewardRate.value },
            type: 'points'
        };
        console.log(payload);
        createProgram(payload);
    }

    return (
        <>
            <div>
                <form onSubmit={submitCreateForm}>
                    <div>
                        <label>Name<input type="text" name="name" /></label>
                    </div>
                    <div>
                        <label>Description<input type="text" name="description" /></label>
                    </div>
                    <div>
                        <label>Organizer<input type="text" name="organizer" /></label>
                    </div>
                    <div>
                        <label>Email<input type="text" name="email" /></label>
                    </div>
                    <div>
                        <label>Point Name<input type="text" name="tokenName" /></label>
                    </div>
                    <div>
                        <label>Point Symbol<input type="text" name="tokenSymbol" /></label>
                    </div>
                    <div>
                        <label>Point icon<input type="text" name="image" /></label>
                    </div>
                    <div>
                        <label>Reward Rate<input type="number" step="0.1" min='0' name="rewardRate" /></label>
                    </div>
                    <button type="submit">Submit</button>
                </form>

            </div>
        </>
    );
}
export default Programs;
