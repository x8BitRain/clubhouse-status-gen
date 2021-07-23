import Clubhouse, {Story, Workflow} from 'clubhouse-lib';
import dayjs from "dayjs";
import isBetween from 'dayjs/plugin/isBetween'
dayjs.extend(isBetween);

const getProjects = async (apiKey: string) => {
  console.log(apiKey);
  const client = Clubhouse.create(apiKey)
  return client.listProjects()
}

const getStories = async (apiKey: string, id: number, weeks: number) => {
  const client = Clubhouse.create(apiKey)
  const workflows = await client.listWorkflows()
  console.log(workflows);
  const stories = await client.listStories(id)

  return categorizeStories(workflows, stories, weeks)
}

const categorizeStories = (workflows: Workflow[], stories: Story[], weeks: number) => {
  const workflowIds = workflows[0].states.map(workflow => [workflow.id, workflow.name])
  console.log(workflowIds);
  console.log(stories);
  const categorized = workflowIds.map(e => {
    return {
      name: e[1],
      stories: stories.filter(g => g.workflow_state_id === e[0] && dayjs(g.updated_at).isBetween(dayjs().subtract(weeks, 'week'), dayjs().add(1, 'week')))
    }
  })
  console.log(categorized);
  return categorized
}

export {getProjects, getStories}