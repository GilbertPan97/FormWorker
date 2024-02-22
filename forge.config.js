module.exports = {
  packagerConfig: {
    asar: true,
    // // pack resource to *.asar
    // asarUnpack: [
    //   "node_modules/**"
    // ],
    // // pack resource to *.exe
    // extraResources: [
    //   {
    //     "from": " ",
    //     "to": " "
    //   }
    // ]
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
  ],
};
