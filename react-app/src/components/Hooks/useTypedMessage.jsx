import { useEffect } from "react";
import { useState } from "react";
import { wait } from "../Helpers";

//Hook that takes a message and sets a wait(helper
//function that creates a delay by using setTimeout)
export const useTypedMessage = (message) => {
	const [typedMessage, setTypedMessage] = useState("");

	useEffect(() => {
		setTypedMessage("");
		if (message.length) {
			(async () => {
				let visibleMessage = "";

				for (let i = 0; i < message.length; i++) {
					await wait(10);
					visibleMessage = visibleMessage + message[i];
					setTypedMessage(visibleMessage);
				}
			})();
		}
	}, [message]);

	return typedMessage;
};
