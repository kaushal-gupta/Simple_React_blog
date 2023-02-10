import db from '../db';
import { useFormInput } from '../hooks';

function CreatePost() {
  const title = useFormInput('');
  const subTitle = useFormInput('');
  const content = useFormInput('');

  function handleSubmit(e) {
    //To protect browser from loading
    e.preventDefault();

    console.log('title', title);
    console.log('subTitle', subTitle);
    console.log('content', content);

    db.collection('posts').add({
      title: title.value,
      content: content.value,
      subTitle: subTitle.value,
      createdAt: new Date(),
    });
  }

  return (
    <div className="create-post">
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          <input {...title} />
        </div>

        <div className="form-field">
          <label>Sub Title</label>
          <input {...subTitle} />
        </div>

        <div className="form-field">
          <label>Content</label>
          <textarea {...content}></textarea>
        </div>

        <button className="create-post-btn">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
