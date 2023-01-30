import { useEffect } from "react";
import { useState } from "react";

export const useTypedMessage = (message) => {
	const [typedMessage, setTypedMessage] = useState("");

	const wait = (ms) =>
		new Promise((resolve) => {
			setTimeout(() => {
				resolve();
			});
		}, ms);

	useEffect(() => {
		setTypedMessage("");
		if (message.length) {
			(async () => {
				let visibleMessage = "";

				for (let i = 0; i < message.length; i++) {
					await wait(40);
					visibleMessage = visibleMessage + message[i];
					setTypedMessage(visibleMessage);
				}
			})();
		}
	}, [message]);

	return typedMessage;
};
