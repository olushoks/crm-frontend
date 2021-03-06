import "./message_history.style.css";
/*===================================*
        END OF IMPORTS
*===================================*/

export const MessageHistory = ({ message }) => {
  if (!message) return null;

  return message.map((msg, index) => (
    <div key={index} className="message-history mt-3">
      <div className="send font-weight-bold text-secondary">
        <div className="sender">{msg.sender}</div>
        <div className="date">{new Date(msg.sent_date).toLocaleString()}</div>
      </div>
      <div className="message">{msg.message}</div>
    </div>
  ));
};
