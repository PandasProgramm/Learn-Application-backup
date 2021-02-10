/**
 * a single learning card with attribtues for learning content
 *
 */


export interface LearningCard_I {

  id:number,
  key:KEYS,

  question:string,
  answer:string,

  correctAnswerCount:number
}
export enum KEYS{

  BUSINESS_ENVIRONMENT='Business_environment',
  BUSINESS_PROCESS='business_process',
  CONTROLLING='controlling',
  MARKET_AND_CUSTOMER='market_and_customer',

  SYSTEM_ADMINISTRATION='system_administration',
  SIMPLIFIED_SYSTEMS='symplified_Systems',
  PUBLIC_NETWORK='public_network',
  CROSS_LINKED_SYSTEMS='cross_linked_systems',

  NETWORK_ENGINEERING='network_engineering',
  SERVER='server',
  IT_SAFETY='it_safety',
  CONSOLE='console',

  PRODUCTION='products',
  ANALYSIS='analysis',
  DATABASES='databases',
  TOOLS='tools',
  JAVA='java',
  DOCUMENTATION='documentation',
  SQL='sql',
  TESTING='testing',
  WEB='web',
  ROUTINE_OPERATIONS='routine_operation'

}
