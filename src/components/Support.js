import React from 'react';

function Support({
  showSupportBox,
  setShowSupportBox,
  name,
  setName,
  email,
  setEmail,
  comment,
  setComment,
  handleSubmit,
}) {
  if (!showSupportBox) {
    return (
      <div className="support-button" onClick={() => setShowSupportBox(true)}>
        Support
      </div>
    );
  }

  return (
    <div className="support-box">
      <h2>Support</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
          <button type="button" onClick={() => setShowSupportBox(false)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default Support;
