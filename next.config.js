const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "EUNJI",
        mongodb_password: "dldmswl#1",
        mongodb_clustername: "cluster0",
      },
    };
  }
  // 개발 단계의 구성 객체의 설정

  return {
    env: {
      mongodb_username: "EUNJI",
      mongodb_password: "dldmswl#1",
      mongodb_clustername: "cluster0",
    },
  };
  // 프로덕션 단계의 설정
};
