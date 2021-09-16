export const onServiceWorkerUpdateReady = () => {
  // eslint-disable-next-line no-undef
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  );
  if (answer === true) {
    // eslint-disable-next-line no-undef
    window.location.reload();
  }
};
