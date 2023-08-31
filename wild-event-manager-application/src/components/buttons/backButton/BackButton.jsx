import React from "react"
import { useNavigate } from "react-router-dom"
import "./BackButton.scss"

const BackButton = () => {
	const navigate = useNavigate()

	const handleBackClick = () => {
		navigate(-1);
	}
	return (
		<div className='BackButton'>
			<button className='back-button' type='button' onClick={handleBackClick}>
				<i className='icon bi bi-skip-backward-fill'></i>
			</button>
		</div>
	)
}

export default BackButton
