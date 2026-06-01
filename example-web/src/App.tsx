import { FetchConsumer, PromiseConsumer } from 'react-consumer';

const todoUrl = 'https://jsonplaceholder.typicode.com/todos/1';
const postPromise = fetch('https://jsonplaceholder.typicode.com/posts/1').then(
  (res) => res.json()
);

const styles = {
  main: { padding: 32, fontFamily: 'sans-serif' },
  section1: {
    marginBottom: 32,
    padding: 16,
    border: '1px solid #ccc',
    borderRadius: 8,
  },
  section2: {
    marginBottom: 32,
    padding: 16,
    border: '1px solid #ccc',
    borderRadius: 8,
  },
  errorText: { color: 'red' },
};

export default function App() {
  return (
    <div style={styles.main}>
      <h1>react-consumer web example</h1>

      <section style={styles.section1}>
        <h2>FetchConsumer</h2>
        <FetchConsumer url={() => todoUrl}>
          {(data, pending, error, status) => {
            if (pending) {
              return <div>Loading todo…</div>;
            }
            if (error) {
              return <div style={styles.errorText}>Error: {error.message}</div>;
            }
            return (
              <div>
                status={status} data={JSON.stringify(data)}
              </div>
            );
          }}
        </FetchConsumer>
      </section>

      <section style={styles.section2}>
        <h2>PromiseConsumer</h2>
        <PromiseConsumer promise={postPromise}>
          {(data, pending, error, status) => {
            if (pending) {
              return <div>Resolving promise…</div>;
            }
            if (error) {
              return <div style={styles.errorText}>Error: {error.message}</div>;
            }
            return (
              <div>
                status={status} data={JSON.stringify(data)}
              </div>
            );
          }}
        </PromiseConsumer>
      </section>
    </div>
  );
}
