export const getUsers = async () => {
  console.log('api getting users');
  await new Response((resolve) => {
    console.log('starting wait for getUsers');
    setTimeout(resolve, 4000);
  });
  console.log('returning wait for getUsers');

  return ['test_user', 'user1', 'user2'];
};
