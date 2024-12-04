/**
 * person controller */


import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::person.person');



/* essa caraia veio como padrao 
import { factories } from '@strapi/strapi'
export default factories.createCoreController('api::person.person', ({ strapi }): {} => ({
	async getName (ctx: any){
        const name = ctx.request.params.name 
        ctx.body = `React Lab - ${name}`
    }
}));
*/

/* caraia de asa customizada para ver se repagina essa birosca 
import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::person.person', ({ strapi }) => ({
  async find(ctx) {
    const { page = 1, pageSize = 10 } = ctx.query;

    // Calcula o offset com base na página e no tamanho da página
    const start = (Number(page) - 1) * Number(pageSize);

    // Busca os dados e o total de registros de forma assíncrona
    const [data, total] = await Promise.all([
      strapi.entityService.findMany('api::person.person', {
        start,
        limit: Number(pageSize),
      }),
      strapi.entityService.count('api::person.person'),
    ]);

    // Retorna os dados e as informações de paginação
    ctx.body = {
      data,
      total,
      page: Number(page),
      pageSize: Number(pageSize),
    };
  },
}));
*/
