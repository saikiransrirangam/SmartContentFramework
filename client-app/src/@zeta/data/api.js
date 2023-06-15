const url = 'http://localhost:3000/v1';

// export const slugify = (str) =>
//   str
//     .toLowerCase()
//     .trim()
//     .replace(/[^\w\s-]/g, '')
//     .replace(/[\s_-]+/g, '-')
//     .replace(/^-+|-+$/g, '');

export function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove non-word characters except spaces and hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/--+/g, '-') // Replace consecutive hyphens with a single hyphen
    .trim(); // Trim leading/trailing spaces
}

export const getQuestion = async (id,queid) => {
  try {
    const res = await fetch(
      `${url}/surveys/${id}/questions/${queid}?populate[questions][populate]=*&populate[cover][fields][0]=caption&populate[cover][fields][1]=url`,
      {
        withCredentials: true,
      },
    );
    console.log(res);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const getSurvey = async (id) => {
  try {
    const res = await fetch(
      `${url}/surveys/${id}?populate[questions][populate]=*&populate[cover][fields][0]=caption&populate[cover][fields][1]=url`,
      {
        withCredentials: true,
      },
    );
    console.log(res);

    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const getSurveys = async (id) => {
  try {
    const res = await fetch(
      `${url}/surveys?populate[questions][populate]=*&populate[cover][fields][0]=caption&populate[cover][fields][1]=url`,
      {
        withCredentials: true,
      },
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
