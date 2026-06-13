import React from 'react';
import { Chip, Table, Button } from '@heroui/react';
import { Eye, Pencil, TrashBin } from '@gravity-ui/icons';
import { getCompanyJobs } from '@/lib/api/jobs';

const RecruiterJobs = async () => {
  const companyId = 'company_123';

  const jobs = await getCompanyJobs(companyId);

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
          Job posts
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white">
          Manage Jobs
        </h1>
        <p className="mt-2 text-sm text-gray-400">
          View and manage all active job postings.
        </p>
      </div>

      <Table className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] shadow-xl shadow-black/20">
        <Table.ResizableContainer>
          <Table.Content
            aria-label="Company jobs table"
            className="min-w-[900px] text-white"
          >
            <Table.Header>
              <Table.Column
                isRowHeader
                id="title"
                defaultWidth="2fr"
                minWidth={250}
              >
                Job Title
                <Table.ColumnResizer />
              </Table.Column>

              <Table.Column id="category" defaultWidth="1fr" minWidth={150}>
                Category
                <Table.ColumnResizer />
              </Table.Column>

              <Table.Column id="deadline" defaultWidth="1fr" minWidth={140}>
                Deadline
                <Table.ColumnResizer />
              </Table.Column>

              <Table.Column id="status" defaultWidth="1fr" minWidth={120}>
                Status
                <Table.ColumnResizer />
              </Table.Column>

              <Table.Column id="actions" defaultWidth="1fr" minWidth={180}>
                Actions
              </Table.Column>
            </Table.Header>

            <Table.Body>
              {jobs?.map(job => (
                <Table.Row key={job._id}>
                  <Table.Cell>
                    <div>
                      <p className="font-medium text-white">{job.jobTitle}</p>
                      <p className="text-xs text-gray-400">{job.location}</p>
                    </div>
                  </Table.Cell>

                  <Table.Cell className="capitalize">
                    {job.jobCategory}
                  </Table.Cell>

                  <Table.Cell>{job.deadline}</Table.Cell>

                  <Table.Cell>
                    <Chip
                      size="sm"
                      variant="soft"
                      color={
                        job.status === 'active'
                          ? 'success'
                          : job.status === 'draft'
                            ? 'warning'
                            : 'danger'
                      }
                    >
                      {job.status}
                    </Chip>
                  </Table.Cell>

                  <Table.Cell>
                    <div className="flex items-center gap-2">
                      <Button
                        isIconOnly
                        size="sm"
                        variant="light"
                        className="text-gray-300 hover:bg-white/10 hover:text-white"
                        aria-label="View job"
                      >
                        <Eye />
                      </Button>

                      <Button
                        isIconOnly
                        size="sm"
                        variant="light"
                        className="text-gray-300 hover:bg-white/10 hover:text-white"
                        aria-label="Edit job"
                      >
                        <Pencil />
                      </Button>

                      <Button
                        isIconOnly
                        size="sm"
                        variant="light"
                        color="danger"
                        className="hover:bg-red-500/10"
                        aria-label="Delete job"
                      >
                        <TrashBin />
                      </Button>
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ResizableContainer>
      </Table>
    </div>
  );
};

export default RecruiterJobs;
