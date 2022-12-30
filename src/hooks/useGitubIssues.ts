import { useState, useEffect } from "react";
import github from "../services/github.api";

interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: false;
}

interface Reactions {
  url: string;
  total_count: number;
  "+1": number;
  "-1": number;
  laugh: number;
  hooray: number;
  confused: number;
  heart: number;
  rocket: number;
  eyes: number;
}

export interface GithubIssueData {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: 1;
  title: string;
  user: User;
  labels: Array<any>;
  state: string;
  locked: false;
  assignee: unknown;
  assignees: Array<any>;
  milestone: unknown;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at: string;
  author_association: string;
  active_lock_reason: string;
  body: string;
  reactions: Reactions;
  timeline_url: string;
  performed_via_github_app: unknown;
  state_reason: unknown;
}

interface UseGithubIssueDataReturnType {
  githubIssueData: GithubIssueData[];
}

export function useGithubIssueData(): UseGithubIssueDataReturnType {
  const [githubIssueData, setGithubIssueData] = useState<GithubIssueData[]>(
    [] as GithubIssueData[]
  );

  useEffect(() => {
    (async () => {
      const { data }: any = await github.get(
        `/repos/estrng/blog/issues` // TODO: colocar env
      );
      setGithubIssueData(data);
    })();
  }, []);

  return { githubIssueData };
}
