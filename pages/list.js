import React from 'react';

import { getSortedItems } from '../lib/items'

export async function getStaticProps() {
  const sortedItems = getSortedItems()
  return {
    props: {
      sortedItems
    }
  }
}

export default function List({ sortedItems }) {

  return (
    <section>
      <h1>ドキュメント一覧</h1>
      <ul>
        {sortedItems.map(({ id, date, title }) => (
          <li key={id}>
            <span>
              <a href={`/docs/${id}`}>{`${title}`}</a>
              <span>{` [${date}]`}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
