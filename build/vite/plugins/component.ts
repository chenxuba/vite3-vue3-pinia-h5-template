/**
 * @name  AutoRegistryComponents
 * @description 按需加载，自动引入组件
 */

import Components from 'unplugin-vue-components/vite';
import { VueUseComponentsResolver, VantResolver, VarletUIResolver } from 'unplugin-vue-components/resolvers';

export const AutoRegistryComponents = () => {
  return Components({
    // dirs: ['src/components'],
    extensions: ['vue', 'md'],
    deep: true,
    dts: 'types/components.d.ts',
    directoryAsNamespace: false,
    globalNamespaces: [],
    directives: true,
    include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
    resolvers: [VueUseComponentsResolver(), VantResolver(), VarletUIResolver()],
  });
};
